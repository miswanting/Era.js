# coding:utf-8
import engine.game as g
import src.lib_base as base
import src.lib_era as era


def intro():
    g.new_page()
    g.p('请选择主角的创建方式', True)
    g.p()
    g.cmd("使用游戏默认初始角色", default_start)


def load():
    pass


def default_start():
    g.data['人物库'] = []
    g.data['人物库'].append(era.default_character())
    print(g.data)


g.init()
g.h1('EraLife')
g.p()
g.cmd("开始游戏", g.goto, True, intro)
g.cmd("读取游戏", g.goto, True, base.gui_load)
