import COS from '../lib/cos-wx-sdk-v5';

var Bucket = 'guipeisheng-1255991113';
var Region = 'ap-beijing';

var cos = new COS({
  getAuthorization: function(options, callback) {
    // 异步获取签名
    wx.request({
      url: ' http://127.0.0.1:3000', // 步骤二提供的签名接口
      data: {
        Method: options.Method,
        Key: options.Key
      },
      dataType: 'text',
      success: function(result) {
        var data = result.data;
        callback({
          TmpSecretId: data.credentials && data.credentials.tmpSecretId,
          TmpSecretKey: data.credentials && data.credentials.tmpSecretKey,
          XCosSecurityToken: data.credentials && data.credentials.sessionToken,
          ExpiredTime: data.expiredTime
        });
      }
    });
  }
});
wx.chooseImage({
  count: 1, // 默认9
  sizeType: ['original'], // 可以指定是原图还是压缩图，默认用原图
  sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
  success: function(res) {
    var filePath = res.tempFiles[0].path;
    var filename = filePath.substr(filePath.lastIndexOf('/') + 1);
    cos.postObject(
      {
        Bucket: Bucket,
        Region: Region,
        Key: filename,
        FilePath: filePath,
        onProgress: function(info) {
          console.log(JSON.stringify(info));
        }
      },
      function(err, data) {
        console.log(err || data);
      }
    );
  }
});
