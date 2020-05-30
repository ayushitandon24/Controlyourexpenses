import { async, TestBed } from '@angular/core/testing';
import { CreateExpenseComponent } from './create-expense.component';
describe('CreateExpenseComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateExpenseComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CreateExpenseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-expense.component.spec.js.map