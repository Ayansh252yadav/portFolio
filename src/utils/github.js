/**
 * Resilient GitHub utility with offline / error fallback.
 * Strictly adheres to truth in metrics — no fabricated numbers or fake stars.
 */

export const STATIC_GITHUB_DATA = {
  username: "Ayansh252yadav",
  profileUrl: "https://github.com/Ayansh252yadav",
  bio: "B.Tech Computer Science Engineering Student | Java • Spring Boot • Web Development",
  reposCount: 3,
  followersCount: null,
  publicRepos: [
    {
      name: "ProfileHub",
      description: "A professional profile-based social platform with Spring Boot, React, MySQL, Spring Security, JWT, OAuth2, and Cloudinary.",
      language: "Java",
      stars: 0,
      url: "https://github.com/Ayansh252yadav/ProfileHub",
      updatedAt: "Active",
      topics: ["spring-boot", "react", "mysql", "jwt", "oauth2", "rest-api"],
    },
    {
      name: "CommitCraftHub",
      description: "Developer-oriented backend platform with JWT authentication and database-backed workflow endpoints.",
      language: "Java",
      stars: 0,
      url: "https://github.com/Ayansh252yadav",
      updatedAt: "Active",
      topics: ["spring-boot", "spring-security", "jwt", "mysql"],
    },
    {
      name: "MeetSphere",
      description: "Real-time communication project exploring WebSocket message brokers and WebRTC peer signaling.",
      language: "Java",
      stars: 0,
      url: "https://github.com/Ayansh252yadav",
      updatedAt: "Active",
      topics: ["webrtc", "websocket", "stomp", "react", "spring-boot"],
    },
  ],
};

export async function fetchGithubProfile(username = "Ayansh252yadav") {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github.v3+json" },
    });

    clearTimeout(timeoutId);

    if (!userRes.ok) {
      return { data: STATIC_GITHUB_DATA, isLive: false, error: null };
    }

    const userData = await userRes.json();

    // Fetch repositories
    let repos = STATIC_GITHUB_DATA.publicRepos;
    try {
      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
        headers: { Accept: "application/vnd.github.v3+json" },
      });
      if (reposRes.ok) {
        const liveRepos = await reposRes.json();
        if (Array.isArray(liveRepos) && liveRepos.length > 0) {
          repos = liveRepos.map((r) => ({
            name: r.name,
            description: r.description || "Personal engineering project",
            language: r.language || "Java",
            stars: r.stargazers_count,
            url: r.html_url,
            updatedAt: new Date(r.updated_at).toLocaleDateString(undefined, {
              month: "short",
              year: "numeric",
            }),
            topics: r.topics || [],
          }));
        }
      }
    } catch {
      // Use static repos fallback
    }

    return {
      data: {
        username: userData.login || username,
        profileUrl: userData.html_url || `https://github.com/${username}`,
        bio: userData.bio || STATIC_GITHUB_DATA.bio,
        reposCount: userData.public_repos || repos.length,
        followersCount: userData.followers,
        publicRepos: repos,
      },
      isLive: true,
      error: null,
    };
  } catch {
    clearTimeout(timeoutId);
    return { data: STATIC_GITHUB_DATA, isLive: false, error: null };
  }
}
