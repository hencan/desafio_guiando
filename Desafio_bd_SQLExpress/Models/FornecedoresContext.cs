using Microsoft.EntityFrameworkCore;

namespace Desafio_bd_SQLExpress.Models
{
    public class FornecedoresContext:DbContext
    {
        public FornecedoresContext(DbContextOptions<FornecedoresContext> options):base(options)
        {

        }
        public DbSet<Fornecedor> Fornecedors {get; set;}
    }
}