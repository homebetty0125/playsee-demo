# Welcome this is your Quiz guide

------ ------ ------ ------ PROFILE ------ ------ ------ ------

這次測驗的路由是 **/profile/!1NMGhCcD3!**

1. 可以輸入 `npm run dev` 來啟動 server，並請從 `/pages/profile/[profileId].jsx` 開始開發
2. 參考以下 API 資訊和 Resource 資訊，呼叫 API 取得資料
3. 參考[連結](https://www.figma.com/file/WrUZc59Z3arDWynIQqUaXI/Front-end-profile?node-id=2%3A3)中的樣式，呈現 API 取得之資訊，並實現 RWD
4. 可以使用 `/util/numberFormat` 來轉換數值成特定的字串 (ex: 1000 => 1k)
5. 實作下面的照片列表無限滾動的功能, 像是[這個](https://scrollmagic.io/examples/advanced/infinite_scrolling.html):
   - 需要利用 token 去拿下一筆資料
   - 可以使用我們寫好的 spinner 元件 `/component/block/spinner`.
   - 也許 [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) 可以幫助到您

> P.S. 有一些元件已經寫好了可以直接使用

# API

有兩個 API 供使用，第一個是關於 user 的基本資訊，第二個是關於照片列表的資訊

### 1. PROFILE_HOST_API

#### Request info:

##### POST {base_url}/web5.0.0/post/get_user_post_list

**_BaseUrl_**
| Name | Url |
| -------- | ---------------------------------------------------- |
| base_url | https://srv2api-dev-v2-framy-stage.uc.app.playsee.co |

**_Header_**
| Name | Type | Description |
| ------------- | ------ | ----------------------------------------------------------- |
| Authorization | string | You can get **PROFILE_HOST_ENDPOINT** in `/asset/constant`. |

**_Body_**
| Name | Required | Type |
| -------------- | :------: | -------- |
| user_id | V | string |

**Example**

```
curl --request POST \
  --url 'https://srv2api-dev-v2-framy-stage.uc.app.playsee.co/web5.0.0/users/get_user_profile' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: ad52e3866ee135ff5d92545349414868#0#web' \
  --data '{
	"user_id": "!1NMGhCcD3!"
}'
```

#### Response info:

以下的資料將會被用到，可以參考 [spec](https://www.figma.com/file/WrUZc59Z3arDWynIQqUaXI/Front-end-profile?node-id=2%3A3)

- **userId:** data.user.user_id `string`
- **userName:** data.user.name `string`
- **uid:** data.user.uid `string`
- **level:** data.user.level `number`
- **followers:** data.count.follower `number`
- **following:** data.count.following + data.count.following_hashtag + data.count.following_location `number`
- **videos:** data.count.post `number`
- **description:** data.profile.public_info.about `string`

### 2. PROFILE_LIST_HOST_API

#### Request info:

##### POST {base_url}/web5.0.0/post/get_user_post_list

**_BaseUrl_**
| Name | Url |
| -------- | ---------------------------------------------------- |
| base_url | https://srv2api-dev-v2-framy-stage.uc.app.playsee.co |

**_Header_**
| Name | Type | Description |
| ------------- | ------ | ----------------------------------------------------------- |
| Authorization | string | You can get **PROFILE_HOST_ENDPOINT** in `/asset/constant`. |

**_Body_**
| Name | Required | Type |
| ---------- | :------: | ------ |
| user_id | V | string |
| page_token | X | string |

**Example**

```
curl --request POST \
  --url 'https://srv2api-dev-v2-framy-stage.uc.app.playsee.co/web5.0.0/post/get_user_post_list' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: ad52e3866ee135ff5d92545349414868#0#web' \
  --data '{
    "user_id": "!1NMGhCcD3!",
    "page_token": ""
}'
```

#### Response info:

以下的資料將會被用到，可以參考 [spec](https://www.figma.com/file/WrUZc59Z3arDWynIQqUaXI/Front-end-profile?node-id=2%3A3)

- **pageToken:** data.page_token `string` (您將會使用這個去取得下一筆資料，如果 token 是 **"NO_MORE_DATA"** 的話就代表已經沒有資料了)
- **postList:** data.post_list `array`
- **coverUrl:** data.post_list[index].display_resources.cover_url `string`
- **locationName:** data.post_list[index].geo.poi.name `string`

# 相關資源

**userAvatar** -> https://g-usr.playsee.co/headshot/{userId}.jpg (需要把 userId 放進去)
**videoThumbnail** -> data.post_list[index].display_resources.cover_url
