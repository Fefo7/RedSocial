using System.ComponentModel.DataAnnotations;

namespace RedSocial.Server.Models
{
    public class Usuario
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
