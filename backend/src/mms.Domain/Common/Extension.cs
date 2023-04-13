namespace mms.Domain.Common
{
    public static partial class Extension
    {
        public static string ToStringItems<T>(this IEnumerable<T> items, string seperator = ",")
        {
            return items != null ? string.Join(seperator, items) : null;
        }
    }
}