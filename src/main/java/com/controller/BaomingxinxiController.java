package com.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

import com.utils.ValidatorUtils;
import com.utils.DeSensUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.annotation.IgnoreAuth;

import com.entity.BaomingxinxiEntity;
import com.entity.view.BaomingxinxiView;

import com.service.BaomingxinxiService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MPUtil;
import com.utils.MapUtils;
import com.utils.CommonUtil;

/**
 * 报名信息
 * 后端接口
 * @author 
 * @email 
 * @date 2025-01-25 16:55:24
 */
@RestController
@RequestMapping("/baomingxinxi")
public class BaomingxinxiController {
    @Autowired
    private BaomingxinxiService baomingxinxiService;









    /**
     * 后台列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,BaomingxinxiEntity baomingxinxi,
		HttpServletRequest request){

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			baomingxinxi.setYonghuzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<BaomingxinxiEntity> ew = new EntityWrapper<BaomingxinxiEntity>();



		PageUtils page = baomingxinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, baomingxinxi), params), params));
        Map<String, String> deSens = new HashMap<>();
				DeSensUtil.desensitize(page,deSens);
        return R.ok().put("data", page);
    }

    /**
     * 前台列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,BaomingxinxiEntity baomingxinxi,
		HttpServletRequest request){
        EntityWrapper<BaomingxinxiEntity> ew = new EntityWrapper<BaomingxinxiEntity>();

		PageUtils page = baomingxinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, baomingxinxi), params), params));
        Map<String, String> deSens = new HashMap<>();
				DeSensUtil.desensitize(page,deSens);
        return R.ok().put("data", page);
    }


	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( BaomingxinxiEntity baomingxinxi){
       	EntityWrapper<BaomingxinxiEntity> ew = new EntityWrapper<BaomingxinxiEntity>();
      	ew.allEq(MPUtil.allEQMapPre( baomingxinxi, "baomingxinxi"));
        return R.ok().put("data", baomingxinxiService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(BaomingxinxiEntity baomingxinxi){
        EntityWrapper< BaomingxinxiEntity> ew = new EntityWrapper< BaomingxinxiEntity>();
 		ew.allEq(MPUtil.allEQMapPre( baomingxinxi, "baomingxinxi"));
		BaomingxinxiView baomingxinxiView =  baomingxinxiService.selectView(ew);
		return R.ok("查询报名信息成功").put("data", baomingxinxiView);
    }

    /**
     * 后台详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        BaomingxinxiEntity baomingxinxi = baomingxinxiService.selectById(id);
        baomingxinxi = baomingxinxiService.selectView(new EntityWrapper<BaomingxinxiEntity>().eq("id", id));
				Map<String, String> deSens = new HashMap<>();
				DeSensUtil.desensitize(baomingxinxi,deSens);
        return R.ok().put("data", baomingxinxi);
    }

    /**
     * 前台详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        BaomingxinxiEntity baomingxinxi = baomingxinxiService.selectById(id);
        baomingxinxi = baomingxinxiService.selectView(new EntityWrapper<BaomingxinxiEntity>().eq("id", id));
				Map<String, String> deSens = new HashMap<>();
				DeSensUtil.desensitize(baomingxinxi,deSens);
        return R.ok().put("data", baomingxinxi);
    }




    /**
     * 后台保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody BaomingxinxiEntity baomingxinxi, HttpServletRequest request){
    	//ValidatorUtils.validateEntity(baomingxinxi);

        baomingxinxiService.insert(baomingxinxi);
        return R.ok().put("data",baomingxinxi.getId());
    }

    /**
     * 前台保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody BaomingxinxiEntity baomingxinxi, HttpServletRequest request){
    	//ValidatorUtils.validateEntity(baomingxinxi);

        baomingxinxiService.insert(baomingxinxi);
        return R.ok().put("data",baomingxinxi.getId());
    }




    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody BaomingxinxiEntity baomingxinxi, HttpServletRequest request){
        //ValidatorUtils.validateEntity(baomingxinxi);
        //全部更新
        baomingxinxiService.updateById(baomingxinxi);
        return R.ok();
    }

    /**
     * 审核
     */
    @RequestMapping("/shBatch")
    @Transactional
    public R update(@RequestBody Long[] ids, @RequestParam String sfsh, @RequestParam String shhf){
        List<BaomingxinxiEntity> list = new ArrayList<BaomingxinxiEntity>();
        for(Long id : ids) {
            BaomingxinxiEntity baomingxinxi = baomingxinxiService.selectById(id);
            baomingxinxi.setSfsh(sfsh);
            baomingxinxi.setShhf(shhf);
            list.add(baomingxinxi);
        }
        baomingxinxiService.updateBatchById(list);
        return R.ok();
    }



    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        baomingxinxiService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }













}
