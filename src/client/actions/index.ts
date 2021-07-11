let nextWordId = 0

export const addWord = (word: string): {id: number, type: string, word: string} => {
  console.log('in action, word:', word)
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}
