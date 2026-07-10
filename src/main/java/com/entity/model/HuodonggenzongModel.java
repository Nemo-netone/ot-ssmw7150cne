package com.entity.model;

import com.entity.HuodonggenzongEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;
import java.io.Serializable;
 

/**
 * 活动跟踪
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2025-01-25 16:55:24
 */
public class HuodonggenzongModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 活动分类
	 */
	
	private String huodongfenlei;
		
	/**
	 * 活动图片
	 */
	
	private String huodongtupian;
		
	/**
	 * 活动地点
	 */
	
	private String huodongdidian;
		
	/**
	 * 开始时间
	 */
	
	private String kaishishijian;
		
	/**
	 * 结束时间
	 */
	
	private String jieshushijian;
		
	/**
	 * 活动状态
	 */
	
	private String huodongzhuangtai;
				
	
	/**
	 * 设置：活动分类
	 */
	 
	public void setHuodongfenlei(String huodongfenlei) {
		this.huodongfenlei = huodongfenlei;
	}
	
	/**
	 * 获取：活动分类
	 */
	public String getHuodongfenlei() {
		return huodongfenlei;
	}
				
	
	/**
	 * 设置：活动图片
	 */
	 
	public void setHuodongtupian(String huodongtupian) {
		this.huodongtupian = huodongtupian;
	}
	
	/**
	 * 获取：活动图片
	 */
	public String getHuodongtupian() {
		return huodongtupian;
	}
				
	
	/**
	 * 设置：活动地点
	 */
	 
	public void setHuodongdidian(String huodongdidian) {
		this.huodongdidian = huodongdidian;
	}
	
	/**
	 * 获取：活动地点
	 */
	public String getHuodongdidian() {
		return huodongdidian;
	}
				
	
	/**
	 * 设置：开始时间
	 */
	 
	public void setKaishishijian(String kaishishijian) {
		this.kaishishijian = kaishishijian;
	}
	
	/**
	 * 获取：开始时间
	 */
	public String getKaishishijian() {
		return kaishishijian;
	}
				
	
	/**
	 * 设置：结束时间
	 */
	 
	public void setJieshushijian(String jieshushijian) {
		this.jieshushijian = jieshushijian;
	}
	
	/**
	 * 获取：结束时间
	 */
	public String getJieshushijian() {
		return jieshushijian;
	}
				
	
	/**
	 * 设置：活动状态
	 */
	 
	public void setHuodongzhuangtai(String huodongzhuangtai) {
		this.huodongzhuangtai = huodongzhuangtai;
	}
	
	/**
	 * 获取：活动状态
	 */
	public String getHuodongzhuangtai() {
		return huodongzhuangtai;
	}
			
}
