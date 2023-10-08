using API.Data;
using API.Middleware;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<StoreContext>(opt => 
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("db_SQLite"));
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

//CUSOTM IDDLEWARE, para loggear excepcioones
app.UseMiddleware<ExceptionMiddleware>();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(opt=>
{
    opt.AllowAnyHeader().AllowAnyMethod().AllowCredentials();
});

app.UseAuthorization();

app.MapControllers();

//Crea scope para => seedear la db
var scope = app.Services.CreateScope();
var context= scope.ServiceProvider.GetRequiredService<StoreContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
try{
    context.Database.Migrate(); //migra a la db o la crea si no hay db
    Seed.Initialize(context);
} catch(Exception ex)
{
    logger.LogError(ex, "ERR en la migracion");
}

app.Run();



//dotnet ef database drop
//dotnet ef database update