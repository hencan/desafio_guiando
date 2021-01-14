using Microsoft.EntityFrameworkCore;

namespace desafio_guiando.Models
{
    public class FornecedoresContext:DbContext
    {
        public FornecedoresContext(DbContextOptions<FornecedoresContext> options):base(options)
        {

        }
        public DbSet<Fornecedor> Fornecedors {get; set;}
    }
}