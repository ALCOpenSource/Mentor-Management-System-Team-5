using System.Security.Cryptography;
using System.Text;

namespace mms.Application.Common.Helper
{
    public class HashHelper
    {
        private static string Sha1(string input)
        {
            if (input == null)
            {
                throw new ArgumentNullException(nameof(input));
            }

            using (var sha1 = new SHA1Managed())
            {
                var buffer = Encoding.UTF8.GetBytes(input);
                var hash = sha1.ComputeHash(buffer);
                var sb = new StringBuilder(hash.Length * 2);

                foreach (var b in hash)
                {
                    sb.Append(b.ToString("X2"));
                }

                return sb.ToString();
            }
        }

        public static string Hash(List<string> ids)
        {
            ids.Sort();
            return Sha1(string.Join(";", ids));
        }
    }
}