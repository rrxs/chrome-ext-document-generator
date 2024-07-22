import { getListGenerated } from '../core'

function generateContextMenu(list: any) {
  chrome.contextMenus.removeAll()

  chrome.contextMenus.create({
    id: 'main',
    title: 'Gerador de documentos',
    contexts: ['editable'],
  })

  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      chrome.contextMenus.create({
        id: list[i],
        title: `${list[i]}`,
        contexts: ['editable'],
        parentId: 'main',
      })
    }
  } else {
    chrome.contextMenus.create({
      id: 'empty',
      title: 'Nenhum documento gerado ainda...',
      contexts: ['editable'],
      parentId: 'main',
    })
  }
}

chrome.storage.local.onChanged.addListener((changes) => {
  let list = []
  if (changes && changes.documentList?.newValue) {
    list = JSON.parse(changes.documentList.newValue)
    console.log(list)
  }
  generateContextMenu(list)
})

chrome.runtime.onInstalled.addListener(async () => {
  const list = await getListGenerated()
  console.log(list)
  generateContextMenu(list)
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== 'main' && info.menuItemId !== 'empty') {
    chrome.scripting.executeScript({
      target: { tabId: tab!.id! },
      func: (item) => {
        const inputEl = document.activeElement
        if (inputEl && inputEl instanceof HTMLInputElement) {
          inputEl.value = item
          inputEl.dispatchEvent(
            new Event('input', {
              bubbles: true,
              cancelable: true,
            }),
          )
        }
      },
      args: [info.menuItemId.toString()],
    })
  }
})
