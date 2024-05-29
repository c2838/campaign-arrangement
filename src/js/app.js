const tupleDatas = {
  checkbox: "./images/checkbox.svg",
  id: "1",
  name: "Christmas 2020",
  advertiser: "Food Market",
  advertiser_group: "Krab",
  description: "holiday night during chr...",
  price: "$2000",
  start: "2020/12/24 19:30",
  end: "2021/01/02 23:00",
  actions: "./images/menu.svg"
}

const poponDatas = {
  duplicate: './images/duplicate.svg',
  edit: './images/edit.svg',
  delete: './images/delete.svg'
}

const selectors = document.querySelector('.nav-selectors')
const mainDatas = document.querySelector('.main-content-datas')
const mainSchema = document.querySelector('.main-content-schema')
const dataAmounts = 20

// 產生資料
function dataGenerator() {
  for(let i = 0; i < dataAmounts; i++) {
    mainDatas.innerHTML += `
      <ul class="datas ${i % 2 === 0 ? 'bgWhite' : 'bgGray' }">
        <li class="data-item" id="data-checkbox">
          <input type="checkbox" id="data-checker">
          <label for="data-checker"></label>
          <img src="${tupleDatas.checkbox}"" alt="">
        </li>
        <li class="data-item" id="data-id">${tupleDatas.id}</li>
        <li class="data-item" id="data-name">${tupleDatas.name}</li>
        <li class="data-item" id="data-advertiser">${tupleDatas.advertiser}<p>${tupleDatas.advertiser_group}</p>
        </li>
        <li class="data-item" id="data-descripition">${tupleDatas.description}</li>
        <li class="data-item" id="data-price">${tupleDatas.price}</li>
        <li class="data-item" id="data-start">${tupleDatas.start}</li>
        <li class="data-item" id="data-end">${tupleDatas.end}</li>
        <li class="data-item" id="data-actions">
          <img src="${tupleDatas.actions}" alt="">
          <div class="actions_menu hidden" id="actions_menu" role="dialog" aria-modal="true" aria-labelledby="data-actions" data-index=${i}>
            <ul class="menu">
              <li class="duplicate">
                <img src="${poponDatas.duplicate}" alt="">
                <span>Duplicate</span>
              </li>
              <li class="edit">
                <img src="${poponDatas.edit}" alt="">
                <span>Edit</span>
              </li>
              <li class="delete">
                <img src="${poponDatas.delete}" alt="">
                <span>Delete</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>`
  }
}



// nav選擇器反白用
function selectItemActive(event) {
  const target = event.target
  const selectItem = document.querySelectorAll('.select-item')
  // 選最接近的select-item元素
  const node = target.closest('.select-item')
  // 避免點到外層的時候反白被取消
  if (node) {
    // 取消所有反白
    selectItem.forEach(element => {
      element.classList.remove('active')
    })
    // 幫選取圖標加上反白
    node.classList.add('active')
  }
}

// 資料打勾後單一值組背景反橘
function dataSelected(event) {
  const target = event.target
  const node = target.closest('#data-checkbox')
  if (node) {
    const checkbox = node.querySelector('#data-checker')
    const dataItem = node.parentElement
    // 使checkbox被標記為checked
    if (checkbox) {
      checkbox.checked = !checkbox.checked
    }
    // 若為checked則背景反橘
    if (checkbox.checked) {
      dataItem.style = "background-color: orange; border-bottom: 1px solid #fff"
    } else {
      // 使背景回歸本色
      if (dataItem.classList.contains('bgWhite')) {
        dataItem.style = "background-color: #fff;"
      } else if (dataItem.classList.contains('bgGray')) {
        dataItem.style = "background-color: #E9E9E9;"
      }
    }
  }
}

// 全選打勾後所有值組背景反橘
function allSelected(event) {
  const target = event.target
  const node = target.closest('#schema-checkbox')
  const datas = document.querySelectorAll('.datas')
  if (node) {
    const checkbox = node.querySelector('#schema-checker')
    if (checkbox) {
      // 全選前先清除所有狀態
      datas.forEach(item => {
        const data_checker = item.querySelector('#data-checker')
        data_checker.checked = false
      })
      // 全選按鈕切換
      checkbox.checked = !checkbox.checked 
    }
    if (checkbox.checked) {
      datas.forEach(item => {
        item.style = "background-color: orange; border-bottom: 1px solid #fff"
        // 將所有值組checkbox打勾
        const data_checker = item.querySelector('#data-checker')
        data_checker.checked = !data_checker.checked
      })
    } else {
        // 值組回歸原背景色
        datas.forEach(item => {
        if (item.classList.contains('bgWhite')) {
          item.style = "background-color: #fff;"
        } else if (item.classList.contains('bgGray')) {
          item.style = "background-color: #E9E9E9;"
        }
        const data_checker = item.querySelector('#data-checker')
        // 將值組勾勾移除
        if (data_checker.checked) {
          data_checker.checked = !data_checker.checked
        }
      })
    }
  }
}

function poponSwitch(event) {
  const target = event.target
  const Menus = document.querySelectorAll('.actions_menu')
  const node = target.closest('#data-actions')
  const menuSwitch = node.querySelector('.actions_menu')
  const index = Number(menuSwitch.dataset.index)

  if (target.tagName === 'IMG') {
    menuSwitch.classList.toggle('hidden')
  }
  for (let i = 0; i < dataAmounts; i++) {
    if (i === index) continue
    if (!Menus[i].classList.contains('hidden') || target.tagName !== 'IMG') {
      Menus[i].classList.add('hidden')
    }
  }
}

dataGenerator()
selectors.addEventListener('click', selectItemActive)
mainDatas.addEventListener('click', dataSelected)
mainDatas.addEventListener('click', poponSwitch)
mainSchema.addEventListener('click', allSelected)
