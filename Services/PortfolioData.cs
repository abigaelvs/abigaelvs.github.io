using System.Net.Http.Json;
using Portfolio.Models;

namespace Portfolio.Services;

public class PortfolioData(HttpClient http)
{
    public Profile Profile { get; private set; } = default!;
    public List<Project> Projects { get; private set; } = [];

    public async Task LoadAsync()
    {
        if (Profile is not null) return;
        Profile = (await http.GetFromJsonAsync("data/profile.json", PortfolioJson.Default.Profile))!;
        Projects = (await http.GetFromJsonAsync("data/projects.json", PortfolioJson.Default.ListProject))!;
    }
}
