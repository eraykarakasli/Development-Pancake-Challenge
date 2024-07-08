import { Component, OnInit } from '@angular/core';
import { PalindromeService } from './palindrome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Palindrome Checker';
  results: any[] = [];
  userInput: string = '';

  constructor(private palindromeService: PalindromeService) {}

  ngOnInit() {
    this.checkPalindromes(["racecar", "A man, a plan, a canal: Panama.", "A test"]);
  }

  onSubmit() {
    if (this.userInput.trim() !== '') {
      this.checkPalindromes([this.userInput.trim()]);
      this.userInput = ''; 
    }
  }

  checkPalindromes(strings: string[]) {
    this.palindromeService.checkPalindromes(strings).subscribe(
      (response: any[]) => {
        this.results = response;
      },
      (error) => {
        console.error("API çağrısı başarısız oldu:", error);
      }
    );
  }
}
