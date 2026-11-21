using System.Text.Json.Serialization;

namespace Portfolio.Models;

// Source-generated JSON: reflection-based deserialization breaks under full trimming in Release.
[JsonSourceGenerationOptions(PropertyNameCaseInsensitive = true)]
[JsonSerializable(typeof(Profile))]
[JsonSerializable(typeof(List<Project>))]
internal partial class PortfolioJson : JsonSerializerContext;
