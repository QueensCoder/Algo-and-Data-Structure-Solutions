Example GHA CI/CD

How it works eng sets up PR test runs build runs other checks Upon click of
merge code merged into main via github a new build is triggered with updated
main new build will be used to replace existing deployment

- what support does this code deployment system provide?
-     building, testing, and shipping code?
- Deployments and Rollbacks
-     ability to deploy new changes assuming tests/build passes
- ability to rollback in case of deployment causing outages Track metrics,
  health checks latency of APIs time it takes to deploy performance of app as a
  whole Connect to Github or some type of version control pre deployment deploy
  is triggered based on merge to main branch Be able to support multiple deploys
  past and present easy rollbacks possibly diff envs like vercel branches how
  much reliability high how scalable high

What to build building deploy of code only
