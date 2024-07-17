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
    public class ComentariosController : ControllerBase
    {
        private readonly RedSocialContext _context;

        public ComentariosController(RedSocialContext context)
        {
            _context = context;
        }

        // GET: api/Comentarios
        [HttpGet ("Comentario/Publicacion/{idP}")]
        public async Task<ActionResult<List<Comentario>>> GetComentarios(int idP)
        {     
            return await _context.Comentarios.Where(cp => cp.PublicacionId == idP).ToListAsync(); 
        }

        // GET: api/Comentarios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Comentario>> GetComentario(int id)
        {
            var comentario = await _context.Comentarios.FindAsync(id);

            if (comentario == null)
            {
                return NotFound();
            }

            return comentario;
        }

        // PUT: api/Comentarios/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComentario(int id, Comentario comentario)
        {
            if (id != comentario.ComentarioId)
            {
                return BadRequest();
            }

            _context.Entry(comentario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComentarioExists(id))
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

        // POST: api/Comentarios
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Comentario>> PostComentario(int idP,int idU,ComentarioDto comen)
        {
           

           try 
            {
                Comentario newC = new Comentario() 
                {
                    Contenido= comen.Contenido,
                    FechaPublicacion = comen.FechaPublicacion,
                    UsuarioId = idU,
                    PublicacionId = idP
                };
                _context.Comentarios.Add(newC);
                await _context.SaveChangesAsync();
                return Ok(newC);
            }
            catch {
                
                    return NotFound();
            }
           
        }

        // DELETE: api/Comentarios/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComentario(int id)
        {
            var comentario = await _context.Comentarios.FindAsync(id);
            if (comentario == null)
            {
                return NotFound();
            }

            _context.Comentarios.Remove(comentario);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ComentarioExists(int id)
        {
            return _context.Comentarios.Any(e => e.ComentarioId == id);
        }
    }
}
