package com.srnpr.ylib.call;

import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.srnpr.ylib.data.DataTableManager;
import com.srnpr.ylib.model.MResult;
import com.srnpr.ylib.model.PageRequest;




public class PageProcess  {

	
	public MResult result(PageRequest pRequest) {
		MResult mResult = new MResult();

		String sView = String.valueOf(pRequest.upSet("Url_View"));

		if (sView.equals("reg")) {
			mResult = new UserCall(pRequest).callReg();

		} else if (sView.equals("login")) {
			mResult = new UserCall(pRequest).callLogin();

		} else {
			
			Map<String, Object> mUserMap = upUserInfo();

			if (mUserMap != null && mUserMap.size() > 0) {
				
			
			
			
			
			if (sView.equals("changeinfo")) {
				mResult = new UserCall(pRequest).callChangeInfo();
			} else if (sView.equals("changepass")) {
				mResult = new UserCall(pRequest).callChangePass(upUserInfo());
			} else if (sView.equals("postphone")) {
				mResult = new UserCall(pRequest).callPostPhone(upUserInfo());
			} else if (sView.equals("postcall")) {
				mResult = new UserCall(pRequest).callPostCall(upUserInfo());
			} else if (sView.equals("usersign")) {
				mResult = new UserCall(pRequest).callUserSign(upUserInfo());
			} else if (sView.equals("v_y_info")) {
				//mResult = new WebBaseProcess().showResult(pRequest);
			}
			} else {
				mResult.error(965901007);

			}
		}

		return mResult;
	}
	
	private Map<String, Object> upUserInfo() {
		Map<String, Object> mReturn = null;

		HttpServletRequest hRequest = ((ServletRequestAttributes) RequestContextHolder
				.getRequestAttributes()).getRequest();

		if (hRequest != null && hRequest.getCookies() != null
				&& hRequest.getCookies().length > 0) {

			for (Cookie c : hRequest.getCookies()) {
				if (c.getName().equals("yinxl_user_cookieid")) {

					mReturn = DataTableManager.Get("y_user").upOneMap(
							"cookieid", c.getValue());
				}
			}

		}
		return mReturn;
	}
	
}
