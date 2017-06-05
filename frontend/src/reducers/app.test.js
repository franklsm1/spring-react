import counter from './index';

describe('reducers', () => {
    describe('counter', () => {
        it('should handle INCREMENT action', () => {
            expect(counter({app: {value: 1}}, {type: 'INCREMENT'}).app.value).toBe(2)
        });

        it('should handle DECREMENT action', () => {
          expect(counter({app: {value: 1}}, { type: 'DECREMENT' }).app.value).toBe(0)
        });

        it('should ignore unknown actions', () => {
          expect(counter({app: {value: 1}}, { type: 'unknown' }).app.value).toBe(1)
        })
    })
});
