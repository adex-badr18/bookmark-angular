import { Component, OnInit } from '@angular/core';
import { LinkService } from '../link.service'
// Import your Bookmark service here
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  linkList: object[] = [];

  // Inject your Bookmark service into the constructor below
  constructor(private linkService: LinkService, private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.linkList = this.linkService.getLinks();
  }

  addToBookmarks(bookmark): void {
    // Invoke addToBookmarks() from the Bookmark service below
      this.bookmarkService.addBookmark();

    alert("Added!");
  }

}
