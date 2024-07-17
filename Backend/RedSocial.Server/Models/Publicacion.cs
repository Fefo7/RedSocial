using System.ComponentModel.DataAnnotations;

namespace RedSocial.Server.Models
{
    public class Publicacion
    {
        public int PublicacionId { get; set; }
        [Required]
        public string? Titulo { get; set; }
        public string? Descripcion { get; set; }
        [Required]
        public DateTime FechaPublicacion { get; set; }
        public int UsuarioId { get; set; }
        public Usuario? Usuarios { get; set; }
        public List<Comentario>? comentarios { get; set; }
    }
}
