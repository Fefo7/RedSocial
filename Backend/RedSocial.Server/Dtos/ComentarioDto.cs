using System.ComponentModel.DataAnnotations;

namespace RedSocial.Server.Dtos
{
    public class ComentarioDto
    {
        public string? Contenido { get; set; }
        [Required]
        public DateTime FechaPublicacion { get; set; }
        public int? PublicacionId { get; set; }

        public int? UsuarioId { get; set; }
    }
}
