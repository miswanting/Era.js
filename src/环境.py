import engine.game as g


def init():
    g.data['自然'] = {
        '时间': [],
        '地点': []
    }
    g.data['社会'] = {
        '事件': [],
        '对方': [],
        '玩家': '',
        '助手': [],
        '队友': [],
        '中立': []
    }
