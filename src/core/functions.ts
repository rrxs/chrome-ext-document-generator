const STORAGE_KEY = 'documentList'

export async function getListGenerated(): Promise<string[]> {
  return new Promise((resolve) => {
    chrome.storage.local.get([STORAGE_KEY], function (itemsJson) {
      const list = itemsJson[STORAGE_KEY]
      if (list) {
        resolve(JSON.parse(list))
      } else {
        resolve([])
      }
    })
  })
}

export async function saveGenerated(document: string): Promise<void> {
  let listSaved = await getListGenerated()
  listSaved.unshift(document)
  listSaved = listSaved.slice(0, 15)
  chrome.storage.local.set({ [STORAGE_KEY]: JSON.stringify(listSaved) })
}

export function clear(): void {
  chrome.storage.local.clear()
}
