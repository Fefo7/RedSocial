using Microsoft.EntityFrameworkCore;

namespace RedSocial.Server.Models
{
    public class RedSocialContext : DbContext
    {
        public RedSocialContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Publicacion> Publicaciones { get; set; }
        public DbSet<Comentario> Comentarios { get; set; }
      

    }
}
