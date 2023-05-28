using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using mms.api.Configurations;
using mms.Application;
using mms.Application.Common.ChatHub;
using mms.Domain.Mail;
using mms.Infrastructure;
using mms.Infrastructure.Context;
using mms.Infrastructure.Seeder;

var builder = WebApplication.CreateBuilder(args);

// Set up configuration sources
var configuration = builder.Configuration;
configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true, reloadOnChange: true);

//Add logging
builder.Logging.AddConsole();

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSignalR();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.ConfigureJwtAuthentication(builder.Configuration);


MySqlDbConfiguration.Configure(builder.Configuration);
MySqlDbConfiguration.ConfigureContainer(builder.Services);
SwaggerConfiguration.ConfigureSwagger(builder.Services);

ApplicationInjection.ApplicationDiContainer(builder.Services);
InfrastructureInjection.InjectInfrastructure(builder.Services);

builder.Services.Configure<MailSettings>(builder.Configuration.GetSection("MailSettings"));
builder.Services.AddHttpContextAccessor();

var app = builder.Build();

using var scope = app.Services.CreateScope();
var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationContext>();

if (app.Configuration["RunMigration"] == "True" && dbContext.Database.GetPendingMigrations().Any())
{
    dbContext.Database.Migrate();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());
app.UseRouting();
app.UseHttpsRedirection();
Seeder.SeedData(app).Wait();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.UseEndpoints(endpoints => { endpoints.MapHub<ChatHub>("/chatHub"); });

app.Run();