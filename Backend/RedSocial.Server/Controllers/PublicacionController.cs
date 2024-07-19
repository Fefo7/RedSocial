using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RedSocial.Server.Dtos;
using RedSocial.Server.Models;

namespace RedSocial.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublicacionController : ControllerBase
    {
        private readonly RedSocialContext _context;

        public PublicacionController(RedSocialContext context)
        {
            _context = context;
        }

        // GET: api/Publicacion
        // Todas las publicaciones con los usuarios que los crearon
        [HttpGet]
        public async Task<ActionResult<List<Publicacion>>> GetPublicaciones()
        {
            var publi = await _context.Publicaciones
                .Include(u => u.Usuarios)
                .Include(c=>c.comentarios)
                .ToListAsync();

            return publi;
        }
        [HttpGet("Comentario/{idP}")]
        public async Task<ActionResult<List<Comentario>>> GetComentarios(int idP)
        {
            return await _context.Comentarios.Where(cp => cp.PublicacionId == idP).ToListAsync();
        }
        // GET: api/Publicacion/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Publicacion>> GetPublicacion(int id)
        {
            var publicacion = await _context.Publicaciones.Include(p=>p.Usuarios)
                              .SingleOrDefaultAsync(p=>p.PublicacionId == id);

            if (publicacion == null)
            {
                return NotFound();
            }

            return publicacion;
        }

        // PUT: api/Publicacion/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPublicacion(int id, Publicacion publicacion)
        {
            if (id != publicacion.PublicacionId)
            {
                return BadRequest();
            }

            _context.Entry(publicacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PublicacionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Publicacion
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}")]
        public async Task<ActionResult<Publicacion>> PostPublicacion(int id,PublicacionDto publicacion)
        {
            var us = await _context.Usuarios.FindAsync(id);
            Publicacion Publi = new Publicacion()
            {
                Titulo = publicacion.Titulo,
                Descripcion = publicacion.Descripcion,
                FechaPublicacion = DateTime.Now,
                UsuarioId= id,
                Usuarios = us
            };
            _context.Publicaciones.Add(Publi);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetPublicacion", new { id = publicacion.PublicacionId }, publicacion);
        }

        // DELETE: api/Publicacion/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePublicacion(int id)
        {
            var publicacion = await _context.Publicaciones.FindAsync(id);
            if (publicacion == null)
            {
           
            }     return NotFound();

            _context.Publicaciones.Remove(publicacion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PublicacionExists(int id)
        {
            return _context.Publicaciones.Any(e => e.PublicacionId == id);
        }
    }
}

