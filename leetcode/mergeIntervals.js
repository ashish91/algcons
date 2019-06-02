function mergeIntervals(intervals) {
	if (intervals.length <= 1) {
		return intervals;
	}
	intervals.sort(function(a, b) { return a[0] - b[0] })

	let currentInterval = intervals[0], mergedIntervals = [];
	for (let i = 1; i < intervals.length; i++) {
	  if (currentInterval[1] >= intervals[i][0] && currentInterval[1] < intervals[i][1]) {
	  	currentInterval = [ currentInterval[0], intervals[i][1] ];
		} else if (currentInterval[1] < intervals[i][0]) {
	  	mergedIntervals.push(currentInterval);
			currentInterval = intervals[i];
		} else if (currentInterval[0] == intervals[i][0] && currentInterval[1] == intervals[i][1]) {
			currentInterval = intervals[i];
		}
	}

	if (currentInterval) {
		mergedIntervals.push(currentInterval);
	}

	return mergedIntervals;
}