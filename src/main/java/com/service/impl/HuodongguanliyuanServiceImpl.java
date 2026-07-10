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


import com.dao.HuodongguanliyuanDao;
import com.entity.HuodongguanliyuanEntity;
import com.service.HuodongguanliyuanService;
import com.entity.vo.HuodongguanliyuanVO;
import com.entity.view.HuodongguanliyuanView;

@Service("huodongguanliyuanService")
public class HuodongguanliyuanServiceImpl extends ServiceImpl<HuodongguanliyuanDao, HuodongguanliyuanEntity> implements HuodongguanliyuanService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<HuodongguanliyuanEntity> page = this.selectPage(
                new Query<HuodongguanliyuanEntity>(params).getPage(),
                new EntityWrapper<HuodongguanliyuanEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<HuodongguanliyuanEntity> wrapper) {
		  Page<HuodongguanliyuanView> page =new Query<HuodongguanliyuanView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}

    
    @Override
	public List<HuodongguanliyuanVO> selectListVO(Wrapper<HuodongguanliyuanEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public HuodongguanliyuanVO selectVO(Wrapper<HuodongguanliyuanEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<HuodongguanliyuanView> selectListView(Wrapper<HuodongguanliyuanEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public HuodongguanliyuanView selectView(Wrapper<HuodongguanliyuanEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
