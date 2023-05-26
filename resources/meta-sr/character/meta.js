import lodash from 'lodash'

let alias = {
  三月七: '三月,相遇之缘,37,3月7',
  丹恒: '单恒,单桓,冷面,小青龙,冷面小青龙',
  佩拉: '佩菈',
  停云: '',
  克拉拉: '',
  卡夫卡: '亲妈',
  姬子: '',
  娜塔莎: '纳塔莎,纳塔沙,纳塔沙',
  布洛妮娅: '大鸭鸭,鸭鸭,板鸭,布洛尼亚,布洛妮亚,布洛尼娅',
  希儿: '希尔,蝴蝶,云天明',
  希露瓦: '希璐瓦',
  彦卿: '延卿,闫卿,彦清,彦青',
  景元: '景原,景源,神君发射器',
  杰帕德: '',
  桑博: '桑柏,桑伯',
  瓦尔特: '老杨,杨叔,瓦尔特杨',
  白露: '小龙人',
  素裳: '',
  罗刹: '罗沙,罗杀',
  艾丝妲: '宇宙级富婆',
  虎克: '胡可,虎克大人,漆黑的虎克,漆黑的虎克大人,鼹鼠党,鼹鼠党老大',
  银狼: '小鸭鸭,小板鸭,黑客,骇客,骇兔',
  阿兰: '',
  青雀: '赌神,赌圣,青鹊',
  黑塔: ''
}

let aliasMap = {}
lodash.forEach(alias, (txt, char) => {
  if (!txt) {
    return true
  }
  lodash.forEach(txt.split(','), (t) => {
    aliasMap[t] = char
  })

})

export { aliasMap }