namespace Portfolio.Models;

public record Social(string Name, string Url, string Icon);
public record Skill(string Name, int Level);
public record SkillGroup(string Name, string Details, string Icon, List<Skill> Skills);
public record Education(string School, string Years, string Period);

public record Profile(
    string Name, string Title, string Tagline, string About,
    string Email, string Phone, string Address, string Nationality,
    int CareerStartYear, string CvUrl, string Photo, string AboutPhoto,
    List<Social> Socials, List<SkillGroup> SkillGroups, List<Education> Education)
{
    public int YearsExperience => DateTime.Now.Year - CareerStartYear;
}

public record Project(
    string Slug, string Title, string Summary, string Description,
    List<string> Tags, string SourceUrl, string? DemoUrl, List<string> Images);
