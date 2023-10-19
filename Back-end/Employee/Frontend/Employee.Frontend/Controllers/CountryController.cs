using Employee.Frontend.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Employee.Frontend.Controllers;

public class CountryController : Controller
{
    private readonly HttpClient _httpClient;
    public CountryController(IHttpClientFactory httpClientFactory)=>_httpClient = httpClientFactory.CreateClient("EmployeeApiBase");
    
    public async Task<IActionResult> Index()
    {
        var data=await GetAllCountry();
        return View(data);
    }
  public async Task<IEnumerable<Country>> GetAllCountry()
    {
        var response = await _httpClient.GetAsync("Country");
        if (response.IsSuccessStatusCode)
        {
            var content = await response.Content.ReadAsStringAsync();
            var countries = JsonSerializer.Deserialize<IEnumerable<Country>>(content);
            return countries;
        }
        return new List<Country>();  
  }
}
