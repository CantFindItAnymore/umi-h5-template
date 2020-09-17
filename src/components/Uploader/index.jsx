import React, { useState, useEffect } from 'react'
import { connect } from 'dva'
import styles from './index.less'
import { Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Toast } from 'antd-mobile'
import { message } from 'antd'
import config from '../../utils/fetch.config.js'

const Uploader = props => {
	const [loading, setLoading] = useState(false)
	const [imgUrl, setImgUrl] = useState('')

	const getBase64 = (img, callback) => {
		const reader = new FileReader()
		reader.addEventListener('load', () => callback(reader.result))
		reader.readAsDataURL(img)
	}

	const beforeUpload = file => {
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
		if (!isJpgOrPng) {
			// Toast.fail('请上传图片')
			message.error('请上传图片')
		}
		return isJpgOrPng
	}

	const handleChange = info => {
		if (info.file.status === 'uploading') {
			setLoading(true)
			return
		}
		if (info.file.status === 'done') {
			getBase64(info.file.originFileObj, imgUrl => {
				setLoading(false)
				setImgUrl(imgUrl)
			})
		}
		if (info.file.status === 'error') {
			setLoading(false)
			Toast.fail(info.file.response.resp_msg)
			return
		}
	}

	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>{props.fileName || ''}</div>
		</div>
	)

	return (
		<div>
			<Upload
				name="avatar"
				listType="picture-card"
				className="avatar-uploader"
				showUploadList={false}
				action={`${config.baseUrl}api-file/oss/image/upload`}
				beforeUpload={beforeUpload}
				onChange={handleChange}
			>
				{imgUrl ? (
					<img src={imgUrl} alt="avatar" style={{ width: '100%' }} />
				) : (
					uploadButton
				)}
			</Upload>
		</div>
	)
}

export default Uploader
