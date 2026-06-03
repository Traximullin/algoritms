function earliestFinishTime(
  landStartTime: number[],
  landDuration: number[],
  waterStartTime: number[],
  waterDuration: number[],
): number {
  let landTime = Infinity;
  for (let i = 0; i < landStartTime.length; i++)
    landTime = Math.min(landTime, landStartTime[i] + landDuration[i]);

  let landFin = Infinity;
  let waterTime = Infinity;
  for (let i = 0; i < waterStartTime.length; i++) {
    landFin = Math.min(
      landFin,
      Math.max(waterStartTime[i], landTime) + waterDuration[i],
    );
    waterTime = Math.min(waterTime, waterStartTime[i] + waterDuration[i]);
  }

  let waterFin = Infinity;
  for (let i = 0; i < landStartTime.length; i++)
    waterFin = Math.min(
      waterFin,
      Math.max(landStartTime[i], waterTime) + landDuration[i],
    );

  return Math.min(landFin, waterFin);
}
