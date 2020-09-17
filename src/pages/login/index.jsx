import React, { useState, useEffect } from 'react'
import { connect } from 'dva'
import { Helmet } from 'react-helmet'
import styles from './index.less'
import { Form, Input, Button, Checkbox, Steps } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Place = props => {
	const onFinish = values => {
		console.log('Received values of form: ', values)
	}

	const Step = Steps.Step
	return (
		<div>
			<Helmet>
				<title>login</title>
			</Helmet>
			<div className={styles.container}>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
				>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: 'Please input your Username!',
							},
						]}
					>
						{/* <Input
							prefix={<UserOutlined className="site-form-item-icon" />}
							placeholder="Username"
						/> */}
						<input />
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}

export default Place
