package com.srnpr.ylib.call;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import org.apache.http.client.HttpClient;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.HttpClientBuilder;

import com.srnpr.zapcom.baseclass.BaseClass;


public class SmsSend extends BaseClass {

	private static LogSend logSend = new LogSend();

	public String send(String sMobilePhone, String sContent) {
		HttpGet httpgets=null;
		try {
			
			sContent=URLEncoder.encode(sContent,"UTF-8");

			HttpClient httpclient = HttpClientBuilder.create().build();
			

			StringBuffer sBuffer = new StringBuffer();
			sBuffer.append("http://ws.montnets.com:7903/MWGate/wmgw.asmx/MongateCsSpSendSmsNew?");
			sBuffer.append("userId=J21386&password=597912&");
			sBuffer.append("pszMobis=" + sMobilePhone + "&pszMsg=" + sContent);
			sBuffer.append("&iMobiCount=1&pszSubPort=*");

			httpgets= new HttpGet(sBuffer.toString());
			

			ResponseHandler<String> responseHandler = new BasicResponseHandler();
			String sResponse = "";

			sResponse = httpclient.execute(httpgets, responseHandler);

			logSend.addLog(965912001, "手机号码：" + sMobilePhone, "内容：" + sContent,
					"请求：" + sBuffer.toString(), "返回结果：" + sResponse);

		} catch (Exception e) {
			
			bLogError(965901014);
		} finally {
			httpgets.releaseConnection();
		}

		return "";
	}

}
