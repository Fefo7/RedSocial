using System.ComponentModel.DataAnnotations;

namespace RedSocial.Server.Models
{
    public class Comentario
    {
        public int ComentarioId { get; set;}
        public string? Contenido { get; set; }
        [Required]
        public DateTime FechaPublicacion { get; set; }
        public int PublicacionId { get; set; }
        
        public int UsuarioId { get; set; }
        
    }
}
