
/*
 * 根据文件类型转化为图标路径
 * @param string type 文件类型
 */

export const file_logo = (type) => {
  switch (type) {
    case 'file':
      return 'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png'
    case 'fileimg':
      return 'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/fileimg.png'
    default:
      return 'https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png'
  }
}