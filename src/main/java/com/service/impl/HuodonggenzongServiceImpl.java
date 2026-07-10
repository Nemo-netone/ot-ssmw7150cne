package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.HuodonggenzongDao;
import com.entity.HuodonggenzongEntity;
import com.service.HuodonggenzongService;
import com.entity.vo.HuodonggenzongVO;
import com.entity.view.HuodonggenzongView;

@Service("huodonggenzongService")
public class HuodonggenzongServiceImpl extends ServiceImpl<HuodonggenzongDao, HuodonggenzongEntity> implements HuodonggenzongService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<HuodonggenzongEntity> page = this.selectPage(
                new Query<HuodonggenzongEntity>(params).getPage(),
                new EntityWrapper<HuodonggenzongEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<HuodonggenzongEntity> wrapper) {
		  Page<HuodonggenzongView> page =new Query<HuodonggenzongView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}

    
    @Override
	public List<HuodonggenzongVO> selectListVO(Wrapper<HuodonggenzongEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public HuodonggenzongVO selectVO(Wrapper<HuodonggenzongEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<HuodonggenzongView> selectListView(Wrapper<HuodonggenzongEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public HuodonggenzongView selectView(Wrapper<HuodonggenzongEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
