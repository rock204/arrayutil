// 配列より最大値と最小値を取り除く
let 配列 = [
4,
1,
2,
10,
12,
9
]
配列 = ArrayUtil.removeMinAndMax(配列)
serial.writeLine("-------------------------")
for (let カウンター = 0; カウンター <= 配列.length - 1; カウンター++) {
    serial.writeLine("" + (配列[カウンター]))
}
