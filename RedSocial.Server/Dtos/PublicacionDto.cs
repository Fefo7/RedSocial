using RedSocial.Server.Models;
using System.ComponentModel.DataAnnotations;

namespace RedSocial.Server.Dtos
{
    public class PublicacionDto
    {
        public int PublicacionId { get; set; }
        [Required]
        public string? Titulo { get; set; }
        public string? Descripcion { get; set; }
        [Required]
        public DateTime FechaPublicacion { get; set; }
        public Usuario? usuario { get; set; }
        public List<Comentario>? comentarios { get; set; }
    }
}
