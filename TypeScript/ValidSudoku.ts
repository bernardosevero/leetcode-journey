// medium
// 36.Valid Sudoku
// https://leetcode.com/problems/valid-sudoku

/* Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules. */

function isValidSudoku(board: string[][]): boolean {
    let rows = new Map<number, Set<string>>(Array.from({length: 9}, (v, k) => [k, new Set<string>()]))
    let columns = new Map<number, Set<string>>(Array.from({length: 9}, (v, k) => [k, new Set<string>()]))
    let blocks = new Map<string, Set<string>>()

    for(let r = 0; r < 9; r++) {
        for(let c = 0; c < 9; c++) {
            const blockKey = `${Math.floor(r/3)},${Math.floor(c/3)}`
            if (!blocks.has(blockKey)) blocks.set(blockKey, new Set<string>())

            if(board[r][c] !== '.') {
                if (rows.has(r) && rows.get(r)?.has(board[r][c]) ) return false
                if (columns.has(c) && columns.get(c)?.has(board[r][c]) ) return false
                if (blocks.has(blockKey) && blocks.get(blockKey)?.has(board[r][c]) ) return false

                rows.get(r)?.add(board[r][c])
                columns.get(c)?.add(board[r][c])
                blocks.get(blockKey)?.add(board[r][c])
            }
        }
    }

    return true
};