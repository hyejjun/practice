import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

// 순서는 항상 싱글톤 먼저오게 한다.
@singleton()
@Store()
export default class CounterStore {
  count = 0;

  // object를 넣었을때 주의할점
  state = {
    x: 1,
  };

	@Action()
  increase(step = 1) {
    this.count += step;
  }

	@Action()
	decrease(step = 1) {
	  this.count -= step;
	}

	// 새 객체를 그려주는 형식으로 써줘야함.
	@Action()
	changeX() {
	  this.state = {
	    ...this.state,
	    x: this.state.x + 1,
	  };
	}
}

/*
@Action은 원래 있는 함수 바로 리턴하게함
비동기 함수는 @Action을 붙이지 말고 start 와 compelete 에다가 @Action 붙여서 처리해주면 된다.
*/
