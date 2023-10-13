// カスタムブロック: 配列から最小値と最大値を取り除く
// numbers: 数値のリスト

namespace ArrayUtil {
    /**
     * 配列から最小値と最大値を取り除く
     * @param numbers 数値のリスト
     * @returns 最小値と最大値を取り除いた新しい配列
     */
    //% block="配列から最小値と最大値を取り除く %numbers=variables_get(myList)"
    export function removeMinAndMax(numbers: number[]): number[] {
        if (numbers.length < 3) {
            // 配列に2つ以下の要素しかない場合、全ての要素を削除する
            return [];
        } else {
            let minIndex = 0;
            let maxIndex = 0;
            let minValue = numbers[0];
            let maxValue = numbers[0];

            // 最小値と最大値のインデックスを見つける
            for (let i = 1; i < numbers.length; i++) {
                if (numbers[i] < minValue) {
                    minIndex = i;
                    minValue = numbers[i];
                }
                if (numbers[i] > maxValue) {
                    maxIndex = i;
                    maxValue = numbers[i];
                }
            }

            // 最小値と最大値を取り除いた新しい配列を作成する
            let result: number[] = [];
            for (let i = 0; i < numbers.length; i++) {
                if (i !== minIndex && i !== maxIndex) {
                    result.push(numbers[i]);
                }
            }

            return result;
        }
    }
}
