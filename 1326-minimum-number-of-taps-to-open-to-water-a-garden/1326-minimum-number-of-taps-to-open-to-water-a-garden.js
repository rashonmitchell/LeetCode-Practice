/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
const minTaps = function (n, ranges) {
  const dp = new Array(n + 1).fill(n + 2)
  dp[0] = 0
  for (let i = 0; i <= n; ++i)
    for (let j = Math.max(i - ranges[i] + 1, 0); j <= Math.min(i + ranges[i], n); ++j)
      dp[j] = Math.min(dp[j], dp[Math.max(0, i - ranges[i])] + 1)
  return dp[n] < n + 2 ? dp[n] : -1
}
