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

const selectors = document.querySelector('.nav-selectors')
const mainDatas = document.querySelector('.main-content-datas')
const mainSchema = document.querySelector('.main-content-schema')


// 產生資料
function dataGenerator() {
  for(let i = 0; i < 20; i++) {
    mainDatas.innerHTML += `
      <ul class="datas ${i % 2 === 0 ? 'bgWhite' : 'bgGray' }" data-id=${i}>
        <li class="data-item" id="data-checkbox">
          <input type="checkbox" id="data-checker">
          <img src="./images/checkbox.svg"" alt="">
        </li>
        <li class="data-item" id="data-id">${tupleDatas.id}</li>
        <li class="data-item" id="data-name">${tupleDatas.name}</li>
        <li class="data-item" id="data-advertiser">${tupleDatas.advertiser}<p>${tupleDatas.advertiser_group}</p>
        </li>
        <li class="data-item" id="data-descripition">${tupleDatas.description}</li>
        <li class="data-item" id="data-price">${tupleDatas.price}</li>
        <li class="data-item" id="data-start">${tupleDatas.start}</li>
        <li class="data-item" id="data-end">${tupleDatas.end}</li>
        <li class="data-item" id="data-actions"><img src="${tupleDatas.actions}" alt=""></li>
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

// 資料選擇後背景反橘
function dataSelected(event) {
  const target = event.target
  const node = target.closest('#data-checkbox')
  console.log(node)
  if (node) {
    const checkbox = node.querySelector('#data-checker')
    const dataItem = node.parentElement
    console.log(checkbox.checked)
    // 使checkbox被標記為checked
    if (checkbox) {
      console.log('Before toggle:', checkbox.checked)
      checkbox.checked = !checkbox.checked
      console.log('After toggle:', checkbox.checked)
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
        datas.forEach(item => {
        if (item.classList.contains('bgWhite')) {
          item.style = "background-color: #fff;"
        } else if (item.classList.contains('bgGray')) {
          item.style = "background-color: #E9E9E9;"
        }
        const data_checker = item.querySelector('#data-checker')
        if (data_checker.checked) {
          data_checker.checked = !data_checker.checked
        }
      })
    }
  }
}

dataGenerator()
selectors.addEventListener('click', selectItemActive)
mainDatas.addEventListener('click', dataSelected)
mainSchema.addEventListener('click', allSelected)