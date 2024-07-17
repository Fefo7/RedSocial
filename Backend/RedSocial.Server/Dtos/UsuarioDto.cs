using System.ComponentModel.DataAnnotations;

namespace RedSocial.Server.Dtos
{
    public class UsuarioDto
    {
        public int UsuarioId { get; set; }
        [Required]
        public string? Nombre { get; set; }
        public string? Apellido { get; set; }
        public DateTime fechaNaciemiento { get; set; }
        [Required]
        public string? claveUsuarios { get; set; }
    }
}
