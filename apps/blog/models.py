from django.db import models
from django.utils import timezone
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
from apps.category.models import Category

def  blog_thumbnail_directory(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

# Create your models here.

class Post(models.Model):

    title =      models.CharField(max_length=255)
    slug =       models.SlugField(max_length=255, unique=True)
    thumbnail =  models.ImageField(upload_to=blog_thumbnail_directory)

    description =    models.CharField(max_length=255)
    content = RichTextUploadingField()

    time_read =  models.IntegerField()

    published =  models.DateTimeField(default=timezone.now)
    views =      models.IntegerField(default=0, blank=True)

    category =   models.ForeignKey(Category, on_delete=models.PROTECT)

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title
    
    def get_view_count(self):
        views = ViewCount.objects.filter(post=self).count()
        return views
    
class ViewCount(models.Model):
    post = models.ForeignKey(Category, related_name='blogpost_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.ip_address}"