exports.level = {
  "goalTreeString": "%7B%22branches%22%3A%7B%22main%22%3A%7B%22target%22%3A%22C9%22%2C%22id%22%3A%22main%22%2C%22remoteTrackingBranchID%22%3A%22o/main%22%7D%2C%22o/main%22%3A%7B%22target%22%3A%22C9%22%2C%22id%22%3A%22o/main%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22custom%22%3A%7B%22target%22%3A%22C13%22%2C%22id%22%3A%22custom%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22feature1%22%3A%7B%22target%22%3A%22C5%27%22%2C%22id%22%3A%22feature1%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22feature2%22%3A%7B%22target%22%3A%22C12%27%22%2C%22id%22%3A%22feature2%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C4%22%3A%7B%22parents%22%3A%5B%22C3%22%5D%2C%22id%22%3A%22C4%22%7D%2C%22C5%22%3A%7B%22parents%22%3A%5B%22C4%22%5D%2C%22id%22%3A%22C5%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C5%27%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C5%27%22%7D%2C%22C6%22%3A%7B%22parents%22%3A%5B%22C5%27%22%5D%2C%22id%22%3A%22C6%22%7D%2C%22C7%22%3A%7B%22parents%22%3A%5B%22C6%22%5D%2C%22id%22%3A%22C7%22%7D%2C%22C10%22%3A%7B%22parents%22%3A%5B%22C7%22%5D%2C%22id%22%3A%22C10%22%7D%2C%22C11%22%3A%7B%22parents%22%3A%5B%22C10%22%5D%2C%22id%22%3A%22C11%22%7D%2C%22C12%22%3A%7B%22parents%22%3A%5B%22C11%22%5D%2C%22id%22%3A%22C12%22%7D%2C%22C8%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C8%22%7D%2C%22C9%22%3A%7B%22parents%22%3A%5B%22C8%22%5D%2C%22id%22%3A%22C9%22%7D%2C%22C12%27%22%3A%7B%22parents%22%3A%5B%22C9%22%5D%2C%22id%22%3A%22C12%27%22%7D%2C%22C13%22%3A%7B%22parents%22%3A%5B%22C12%27%22%2C%22C5%27%22%5D%2C%22id%22%3A%22C13%22%7D%7D%2C%22tags%22%3A%7B%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22custom%22%2C%22id%22%3A%22HEAD%22%7D%2C%22originTree%22%3A%7B%22branches%22%3A%7B%22main%22%3A%7B%22target%22%3A%22C9%22%2C%22id%22%3A%22main%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C8%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C8%22%7D%2C%22C9%22%3A%7B%22parents%22%3A%5B%22C8%22%5D%2C%22id%22%3A%22C9%22%7D%7D%2C%22tags%22%3A%7B%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22main%22%2C%22id%22%3A%22HEAD%22%7D%7D%7D",
  "solutionCommand": "git checkout custom;git merge feature1;git checkout -b feature2;git commit;git commit;git fakeTeamwork;git fakeTeamwork;git commit;git commit;git commit;git checkout main;git pull;git checkout feature2;git rebase -i main;git checkout custom;git merge feature2",
  "startTree": "%7B%22branches%22%3A%7B%22main%22%3A%7B%22target%22%3A%22C2%22%2C%22id%22%3A%22main%22%2C%22remoteTrackingBranchID%22%3A%22o/main%22%7D%2C%22o/main%22%3A%7B%22target%22%3A%22C2%22%2C%22id%22%3A%22o/main%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22custom%22%3A%7B%22target%22%3A%22C2%22%2C%22id%22%3A%22custom%22%2C%22remoteTrackingBranchID%22%3Anull%7D%2C%22feature1%22%3A%7B%22target%22%3A%22C5%27%22%2C%22id%22%3A%22feature1%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C4%22%3A%7B%22parents%22%3A%5B%22C3%22%5D%2C%22id%22%3A%22C4%22%7D%2C%22C5%22%3A%7B%22parents%22%3A%5B%22C4%22%5D%2C%22id%22%3A%22C5%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C5%27%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C5%27%22%7D%7D%2C%22tags%22%3A%7B%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22feature1%22%2C%22id%22%3A%22HEAD%22%7D%2C%22originTree%22%3A%7B%22branches%22%3A%7B%22main%22%3A%7B%22target%22%3A%22C2%22%2C%22id%22%3A%22main%22%2C%22remoteTrackingBranchID%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%7D%2C%22tags%22%3A%7B%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22main%22%2C%22id%22%3A%22HEAD%22%7D%7D%7D",
  "name": {
    "es_ES": "Curs 2024-2025 | DAM1 (A)"
  },
  "hint": {
    "es_ES": "Curs 2024-2025 | DAM1 (A)"
  },
  "startDialog": {
    "es_ES": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Curs 2024-2025 | DAM1 (A)",
              "",
              "",
              "Una prova!"
            ]
          }
        }
      ]
    }
  }
};
