using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace mms.Domain.Common
{
    public class BaseEntity
    {
        [Key] 
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}