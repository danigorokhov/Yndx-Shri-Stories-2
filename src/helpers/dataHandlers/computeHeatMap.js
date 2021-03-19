function computeHeatMap(activeCommits) {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  const heatMapData = {};
  for (let dayIx = 0; dayIx < days.length; dayIx += 1) {
    const values = [];
    for (let hourIx = 0; hourIx < 24; hourIx += 1) {
      values.push(0);
    }

    heatMapData[days[dayIx]] = values;
  }

  for (let commitIx = 0; commitIx < activeCommits.length; commitIx += 1) {
    const commit = activeCommits[commitIx];

    const commitDate = new Date(commit.timestamp);
    const commitDay = commitDate.getUTCDay();
    const commitHour = commitDate.getUTCHours();

    const dayName = days[commitDay];
    heatMapData[dayName][commitHour] += 1;
  }

  return heatMapData;
}

module.exports = {
  computeHeatMap,
};
